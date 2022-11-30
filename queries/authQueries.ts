import myaxios from "@helpers/myAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface oauthParams {
  code: string;
}

const queryClient = useQueryClient();

export const useGithubOauth = () => {
  const mutation = useMutation({
    mutationFn: (githubData: oauthParams) => {
      return myaxios.request({
        name: "github-oauth-login",
        method: "POST",
        data: githubData,
      });
    },
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(["me"], () => data);
    },
  });
  return mutation;
};
