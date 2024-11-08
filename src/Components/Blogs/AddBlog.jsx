import axios from 'axios';
import { useContext, useState } from 'react';

import Swal from 'sweetalert2';


import { AuthContext } from '../../Providers/AuthProvider';
import Loader from '../Loader/Loader';

const AddBlog = () => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  // Function to upload image to Cloudinary
  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === 'image');
    data.append("upload_preset", type === 'image' ? "blog_preset" : "null");

    try {
      
      let api = `https://api.cloudinary.com/v1_1/auraloom/image/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error) {
      console.log(error);
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload image to Cloudinary
      const imgUrl = img ? await uploadFile('image') : 'null';

      
      // Collect form data
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const category = form.category.value;
      const creator = user.displayName;
      const email = user.email;
     const bloggerImage = user.photoUrl;
      
      const newBlog = { title, creator, bloggerImage, email, description, category, imgUrl };
      console.log(newBlog);
      // Send data to the backend to save in MongoDB
    const res = await axios.post('http://localhost:8000/blogs', newBlog);

      if (res.data) {
        Swal.fire({
          title: "Success!",
          text: "Blog Added Successfully",
          icon: "success",
          confirmButtonText: 'Ok'
        });
        form.reset();
      }

      setImg(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className='mx-auto container flex  flex-col justify-center items-center '>
      <main className="relative  w-full  md:flex md:items-center ">
        
        <div className="flex-1 h-full my-14  flex items-center justify-center p-3 translate-y-10">
          <div className='flex flex-col  p-6 rounded-md sm:p-10 bg-[#caf0f8] bg-opacity-90 text-gray-900'>


            
            <form
              onSubmit={handleSubmit}
              className="w-full"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-[#03045e]">Create Blog</h2>
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
                <div className="mb-4 lg:col-span-9 col-span-1">
                  <label className="block text-[#03045e] text-sm font-bold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter Podcast Title"
                    required
                  />
                </div>
                <div className="mb-4 lg:col-span-5 col-span-1">
                  <label className="block text-[#03045e] text-sm font-bold mb-2" htmlFor="details">
                    Write Your Blog
                  </label>
                  <textarea
                    name="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter podcast details"
                    rows="4"
                  ></textarea>
                </div>

                <div className="mb-4 lg:col-span-2 col-span-1">
                  <label className="block text-[#03045e] text-sm font-bold mb-2">
                    Wallpaper
                  </label>
                  <input
                    type="file"
                    name="wallpaper"
                    accept="image/*"
                    onChange={(e) => setImg(e.target.files[0])}
                    
                    className="block w-full text-sm text-gray-500 p-4  rounded dark:text-gray-200 bg-white dark:bg-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                  />
                </div>

                <div className="mb-4 lg:col-span-9 col-span-1">
                  <label className="block text-[#03045e] text-sm font-bold mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 bg-white dark:bg-gray-800   leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter podcast category"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="submit"
                  value="Create Blog"
                  className="bg-[#0077b6] hover:bg-[#03045e] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </form>

            {loading && <Loader></Loader>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddBlog;