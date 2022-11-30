import myaxios, { myAxiosRequest } from "@helpers/myAxios";
import { setAccessToken, setRefreshToken } from "@helpers/tokens";
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
      const { data: response } = data;
      if (response) {
        setAccessToken(response.tokens?.access_token);
        setRefreshToken(response.tokens?.refresh_token);
        delete response.tokens;

        queryClient.setQueryData(["me"], () => response);
      }
    },
  });
  return mutation;
};
