"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ShortenRequest, shortenSchema } from "@/lib/validations/shorten";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useMutation } from "@tanstack/react-query";

interface ShortenFormProps {
  csrfToken: string;
}

const ShortenForm = ({ csrfToken }: ShortenFormProps) => {
  const form = useForm<ShortenRequest>({
    resolver: zodResolver(shortenSchema),
    defaultValues: {
      url: "",
    },
  });

  const handleSubmit = (values: ShortenRequest) => {
    console.log(values);
    createShortLink(values);
  };

  const { mutate: createShortLink } = useMutation({
    mutationFn: async (payload: ShortenRequest) => {
      axios.post("/api/shorten", payload, {
        headers: {
          "X-CSRF-Token": csrfToken,
        },
      });
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex items-baseline gap-2 mb-6"
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
        <Button type="submit">Shorten!</Button>
      </form>
    </Form>
  );
};

export default ShortenForm;
