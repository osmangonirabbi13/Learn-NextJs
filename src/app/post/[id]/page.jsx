import React from "react";

const page = async ({ params }) => {
  const p = await params;
  console.log(p.id);
  return (
    <div>
      <div>
        <p>single post : {p.id}</p>
      </div>
    </div>
  );
};

export default page;
