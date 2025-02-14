# Image Slider Website

Welcome to the **Image Slider** website! This is a simple web-based image slider that allows users to view a series of images in a smooth, interactive carousel format.

## Features

- **Image Slider**: A smooth, automatic or manual carousel that lets users view multiple images.
- **Navigation Controls**: Users can navigate through the images using "Next" and "Previous" buttons.
- **Automatic Play**: The images automatically transition after a specified time interval.
- **Responsive Design**: The slider adapts to different screen sizes and devices, making it mobile-friendly.
- **Customizable**: Easily add or remove images from the slider.

## Installation

To set up the image slider on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/aryandubey0000/Image-Slider.git
   ```

2. Navigate into the project folder:
   ```bash
   cd image-slider-website
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

   Alternatively, you can serve the project using a local server (e.g., with Python's built-in HTTP server).

## Usage

1. Open the website in your browser.
2. The image slider will automatically start playing.
3. Use the "Next" and "Previous" buttons to navigate through the images manually.
4. If you want to stop the automatic sliding, you can pause the slider by clicking a "Pause" button (if added).
5. You can add or change the images by modifying the `images` array in the JavaScript file.

## Configuration

- **Images**: You can update the images by adding new image URLs to the `images` array in the `script.js` file.
- **Transition Speed**: Adjust the duration of the image transitions by modifying the `transitionSpeed` variable in `script.js`.
- **Auto Play Interval**: Adjust how often the images automatically transition by changing the `autoPlayInterval` value in the JavaScript file.

## Technologies Used

- **HTML**: Structure of the image slider.
- **CSS**: Styling and transitions for a sleek design.
- **JavaScript**: Logic to control the automatic sliding, navigation, and image handling.

## Contributing

We welcome contributions to improve the image slider:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is open-source and available under the [GNU GENERAL PUBLIC LICENSE](https://github.com/aryandubey0000/Image--Slider/blob/master/LICENSE).

## Acknowledgements

- Inspiration from popular image carousels used in websites.
- Thanks to all contributors for improving the project.
