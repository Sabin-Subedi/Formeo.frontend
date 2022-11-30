import { getAccessToken } from "@helpers/tokens";
import { useGithubOauth } from "@queries/authQueries";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect } from "react";

function GithubOAuthPage() {
  const { mutate } = useGithubOauth();
  const router = useRouter();

  useLayoutEffect(() => {
    if (getAccessToken()) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (router.query.code) {
      mutate({
        code: router.query.code as string,
      });
    }
  }, [router]);

  return <div>GithubOAuthPage</div>;
}

export default GithubOAuthPage;
