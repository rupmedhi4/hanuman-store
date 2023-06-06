import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import allProduct from "../../AllProduct/allProduct";

const allProductSlice = createSlice({
  name: "allProductSlice",
  initialState: {
  dummyArray : [
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7',
          title: 'Dummy Title 1',
          paragraph: 'Paragraph 1'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
        ,  {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540',
          title: 'Dummy Title 2',
          paragraph: 'Paragraph 2'
        },
        {
          img: 'https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a',
          title: 'Dummy Title 20',
          paragraph: 'Paragraph 20'
        }
      
      ]
  },

  reducers: {
    ShowAllProductHandler: (state, action) => {
        const navigate = useNavigate()
        navigate(<allProduct/>)
        
    }
},


});


export const { ShowAllProductHandler } = allProductSlice.actions;

export default allProductSlice.reducer;
