"use client"

import { Button } from "@/components/ui/button";
// import { requireAuth } from "@/lib/auth-utils";
// import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";
import { useTRPC } from "@/trpc/client";
import {
  useMutation, useQuery,
  // useQueryClient
} from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  // await requireAuth()
  // const data = await caller.getUsers()
  const trpc = useTRPC()
  // const queryClient = useQueryClient()
  const { data } = useQuery(trpc.getWorkflows.queryOptions())
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      // queryClient.invalidateQueries(trpc.getWorkflows.queryOptions())
      toast.success("Job Queued!!")
    }
  }))

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      protected server component
      <div>
        {JSON.stringify(data)}
      </div>
      <LogoutButton />
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create workflow
      </Button>
    </div>
  );
}

export default Page