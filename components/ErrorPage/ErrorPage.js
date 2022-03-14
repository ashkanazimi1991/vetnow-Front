import errorStyle from './ErrorPage.module.css'
function ErrorPage() {
    return (
      <div className={errorStyle["container-center-horizontal"]}>
        <div className={errorStyle["errorpage screen"]}>
          <div className={errorStyle["overlap-group"]}>
            <img
              className={`${errorStyle["laptop"]} ${errorStyle["smart-layers-pointers"]}`}
              src="/images/ErrorPage/laptop.svg"
              alt=""
            />
            <img
              className={`${errorStyle["x404-error"]} ${errorStyle["smart-layers-pointers"]}`}
              src="/images/ErrorPage/404Error.svg"
              alt=""
            />
            <img
              className={`${errorStyle["emoji"]} ${errorStyle["smart-layers-pointers"]}`}
              src="/images/ErrorPage/emoji.svg"
              alt=""
            />
            <img
              className={`${errorStyle["error-logo"]} ${errorStyle["smart-layers-pointers"]}`}
              src="/images/ErrorPage/errorLogo.svg"
              alt=""
            />
            <img
              className={`${errorStyle["under-construction"]} ${errorStyle["smart-layers-pointers"]}`}
              src="/images/ErrorPage/underConstruction.svg"
              alt=""
            />
            <img
              className={`${errorStyle["setting"]} ${errorStyle["smart-layers-pointers"]}`}
              src="/images/ErrorPage/setting.svg"
              alt=""
            />
            <img
              className={`${errorStyle["search"]} ${errorStyle["smart-layers-pointers"]}`}
              src="/images/ErrorPage/search.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default ErrorPage;
  