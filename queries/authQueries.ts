import myaxios, { myAxiosRequest } from "@helpers/myAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface oauthParams {
  code: string;
}

export const useGithubOauth = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (githubData: oauthParams) => {
      return myAxiosRequest({
        url: "",
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
