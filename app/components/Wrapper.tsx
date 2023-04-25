import React from "react";

// const Wrapper = ({ children, }) => {
//   return (
//     <div
//       className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${
//         className || ""
//       }`}>
//       {children}
//     </div>
//   );
// };

// export default Wrapper;
export default function Wrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${ ""
          }`}>
          {children}
        </div>
      </body>
    </html>
  );
}
