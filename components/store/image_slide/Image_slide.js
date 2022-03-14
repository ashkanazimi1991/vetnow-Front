import styles from './image.module.css'


const Image_slide = ({image}) => {
  return (
    <div className={styles.image_container}>
      <h1 style={{whiteSpace: 'nowrap'}}>Best or Null</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default Image_slide;
