import { useGithubOauth } from "@queries/authQueries";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function GithubOAuthPage() {
  const { mutate } = useGithubOauth();
  const router = useRouter();

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
