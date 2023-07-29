"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ShortenRequest, shortenSchema } from "@/lib/validations/shorten";
import { Form, FormControl, FormField, FormMessage } from "./ui/Form";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useMutation } from "@tanstack/react-query";
import { useAliasStore } from "@/store/alias";
import { useToast } from "@/hooks/useToast";

interface ShortenFormProps {
  csrfToken: string;
}

const ShortenForm = ({ csrfToken }: ShortenFormProps) => {
  const { addAlias } = useAliasStore();
  const { toast } = useToast();

  const form = useForm<ShortenRequest>({
    resolver: zodResolver(shortenSchema),
    defaultValues: {
      url: "",
    },
  });

  const handleSubmit = (values: ShortenRequest) => {
    createShortLink(values);
  };

  const { mutate: createShortLink, isLoading: isShortening } = useMutation({
    mutationFn: async (payload: ShortenRequest) => {
      const { data } = await axios.post("/api/shorten", payload, {
        headers: {
          "X-CSRF-Token": csrfToken,
        },
      });

      return data;
    },
    onSuccess(data: { alias: string }) {
      form.reset();
      addAlias(data.alias);
    },
    onError() {
      toast({
        title: "Oh, we ran into error!",
        description:
          "There was an error in shortening your link, please try again later.",
        variant: "destructive",
      });
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-6"
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <div className="flex-grow">
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="Enter a link to shorten it"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </div>
          )}
        />
        <Button disabled={isShortening} type="submit">
          Shorten!
        </Button>
      </form>
    </Form>
  );
};

export default ShortenForm;
