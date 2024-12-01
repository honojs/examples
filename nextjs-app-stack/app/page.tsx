"use client";
import { $api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { useRef } from "react";

export default function Home() {
  const $post = $api.echo.$post;
  const nameRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation<
    InferResponseType<typeof $post>,
    Error,
    InferRequestType<typeof $post>["json"]
  >({
    mutationFn: async (data) => {
      const res = await $post({
        json: data,
      });
      return await res.json();
    },
    mutationKey: ["echo"],
  });

  return (
    <>
      <input ref={nameRef} type="text" placeholder="Name" />
      <button
        disabled={mutation.isPending}
        onClick={() => {
          mutation.mutate({
            name: nameRef.current?.value || "",
          });
        }}
      >
        Send
      </button>
      {mutation.isSuccess && <div>Hello {mutation.data.name}</div>}
    </>
  );
}
