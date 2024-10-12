import { useForm } from "react-hook-form";
import { useEditVideoMutation } from "../../features/api/apiSlice";

const Form = ({video}) => {
  // We got toople
  const [UpdateVideo,{ isLoading, isSuccess, isError }] = useEditVideoMutation();
  const { register, handleSubmit, error } = useForm();

  const { id,title,author,description,link,thumbnail,date,duration,views } = video;

  const onSubmit = (data) => {
    UpdateVideo({id, data});
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  {...register("title")}
                  defaultValue={title}
                  id="first-name"
                  autoComplete="given-name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  {...register("author")}
                  defaultValue={author}
                  id="last-name"
                  autoComplete="family-name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="description"
                    {...register("description")}
                    defaultValue={description}
                    rows="3"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your video
                </p>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  YouTube Video Link
                </label>
                <input
                  type="text"
                  name="link"
                  {...register("link")}
                  defaultValue={link}
                  id="email-address"
                  autoComplete="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Thumbnail link
                </label>
                <input
                  type="text"
                  name="thumbnail"
                  {...register("thumbnail")}
                  defaultValue={thumbnail}
                  id="street-address"
                  autoComplete="street-address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  {...register("date")}
                  defaultValue={date}
                  id="city"
                  autoComplete="address-level2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  {...register("duration")}
                  defaultValue={duration}
                  id="region"
                  autoComplete="address-level1"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Views
                </label>
                <input
                  type="text"
                  name="views"
                  {...register("views")}
                  defaultValue={views}
                  id="postal-code"
                  autoComplete="postal-code"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              disabled={isLoading}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
        </div>
      </form>
      {isError && <p className="text-red-700">{error}</p>}
      {isSuccess && (
        <p className="text-green-600 mt-6 text-center">Successfully Updated</p>
      )}
    </>
  );
};

export default Form;
