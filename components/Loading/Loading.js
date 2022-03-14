import Image from "next/image";
const Loading = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <h1>Loading . . .</h1>
        <Image src="/images/99.png" width="100%" height="100%" alt="" />
      </div>
      <style global jsx>
        {`
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <style jsx>
        {`
          .main {
            display: flex;
            flex-direction:column;
            width: 100%;
            height: 100%;
            background-color: "white";
            -webkit-animation: scale-up-center 1s
              cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate both;
            animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1)
              infinite alternate both;
          }
         
          .wrapper {
            margin: auto;
          }
          
          @-webkit-keyframes scale-up-center {
            0% {
              -webkit-transform: scale(0.9);
              transform: scale(0.9);
              opacity:0.8;
            }
            100% {
              -webkit-transform: scale(1);
              transform: scale(1);
              opacity:1;
            }
          }
          @keyframes scale-up-center {
            0% {
              -webkit-transform: scale(0.9);
              transform: scale(0.9);
              opacity:0.8;
            }
            100% {
              -webkit-transform: scale(1);
              transform: scale(1);
              opacity:1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
