import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

interface AliasCardProps {
  alias: string;
}

const AliasCard = ({ alias }: AliasCardProps) => {
  const url = `${window.location.origin}/${alias}`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your link was shortified successfully!</CardTitle>
        <CardDescription>
          <p>
            New URL is {url}
            <CopyToClipboard text={url}>
              <span className="block text-xs font-semibold cursor-pointer">
                Click here to copy your new URL
              </span>
            </CopyToClipboard>
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default AliasCard;
