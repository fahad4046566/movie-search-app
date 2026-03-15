const Skelton = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:m-10 ml-10 ">
        {[...Array(8)].map((_, i) => (
          <div key={i}>
            <div className="flex w-85 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skelton;
