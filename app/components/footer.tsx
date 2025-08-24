import React from "react";

type Props = {
  home?: boolean;
};

const Footer = (props: Props) => {
  return (
    <React.Fragment>
      {props.home ? (
        <div className="w-full mt-auto p-[0px_50px_50px] max-md:p-[20px]">
          <p className="text-start max-md:text-center text-black dark:text-white text-[16px] max-md:text-[14px]">
            © {new Date().getFullYear()} by P U. All rights reserved.
          </p>
        </div>
      ) : (
        <div className="w-full mt-auto p-[20px] max-md:p-[10px] border-t border-black dark:border-white">
          <p className="text-center text-black dark:text-white text-[16px] max-md:text-[14px]">
            © 2025 by P U. All rights reserved.
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Footer;
