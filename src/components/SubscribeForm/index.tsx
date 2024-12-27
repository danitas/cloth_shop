const SubscribeForm = () => {
  return (
    <form className="relative">
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2 4h16M2 4l8 6 8-6M2 4v12h16V4"
            />
          </svg>
        </div>

        <input
          type="email"
          id="email"
          className="w-full border p-4 ps-10 text-sm"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          className="absolute right-2.5 top-1/2 -translate-y-2/4 bg-black px-4 py-2 text-sm font-medium text-white focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
