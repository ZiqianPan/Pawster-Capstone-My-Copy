import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: "auto", height: 360 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://bestfriends.org/sites/default/files/2022-08/DrBlissShiba8725SAx2.jpg",
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/54628e00e4b0b862de638015/1594589044654-MW22PA47X00AI2NXPMLW/image-asset.jpeg?format=750w',
    title: 'B&W Cat',
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/58e3cd71b8a79bb4b85f2249/1567438582434-FOLXF2VDSV3ZLEDOBLBY/foster+pic.jpeg?format=1500w",
  },
  {
    img: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/04/Beagle_03.jpg',
    title: 'Beagle',
    cols: 2,
  },
  {
    img: 'https://jointanimalservices.org/wp-content/uploads/2015/07/kittensfoster.jpg',
    title: 'Cats',
    cols: 2,
  },
  {
    img: "https://labellefoundation.org/wp-content/uploads/2020/10/slide-2.jpg",
    title: 'Hats',
    cols: 2,
  },
];