import image from '../../assets/banner/CFC_banner.jpg'
import PageBanner from '../Shared/PageBanner/PageBanner';
const CFC = () => {
  return (
    <div>
      <PageBanner image={image} pageName={"Carbon Footprint Calculator"} />
    </div>
  );
};

export default CFC;
