import { useParams } from "react-router-dom";
import Form from "./Form";
import { useGetVideoQuery } from "../../features/api/apiSlice";

const UpdateVideo = () => {
  const {id} = useParams();
  const {data:video, isLoading, isError, error} = useGetVideoQuery(id);

  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>
  }
  if (!isLoading && !isError && video?.id) {
    content = <Form video={video} />
  }

    return (
      <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Update video
            </h3>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
           {content}
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default UpdateVideo;
  