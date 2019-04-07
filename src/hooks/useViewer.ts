import {useViewerQuery, ViewerQueryViewer} from "../graphql/components";

const useViewer = (): ViewerQueryViewer | null => {
  const {data, error, loading} = useViewerQuery({
    fetchPolicy: "cache-first"
  })

  if (error || loading) return null

  if(data && data.viewer) {
    return data.viewer
  }

  return null
}

export default useViewer
