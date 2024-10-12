import { useForm } from "react-hook-form";
import { useAddVideoMutation } from "../../features/api/apiSlice";

const AddVideo = () => {
  // We got toople
  const [ AddVideo, { isLoading, isSuccess, isError } ] = useAddVideoMutation();
  const { register, handleSubmit, reset, error} = useForm();

  const onSubmit = data => {
    AddVideo(data);
    reset();
  };

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add new video
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add new video
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
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
                    Save
                  </button>
                </div>
              </div>
            </form>
            {isError && <p className="text-red-700">{error}</p>}
            {isSuccess && <p className="text-green-600 mt-6 text-center">Successfully Added</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddVideo;
