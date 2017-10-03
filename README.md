# owLazyLoad
Lazyload images, iframes, videos and even background images for the desired DOM elements.

## Why this?
Lazyloading content has no mistery and there are lots of libraries that get the job done, but I just wanted to keep it simple, light and pure.
I use vanilla Javascript and the minified version size is only **703 bytes**.
However, there is no scroll/viewport checking or any other feature rather than loading your desired content at x millisecs after the DOM is ready. The code is easy to read and understand and you should have no problems to extend it to fit your particular needs.

## Get started
Just include the JS in your project.
No need to initialise it, but if you need to, for example to get it initialised after an Ajax request, use:
```javascript
owLazyLoad();
```
## Usage
The general rule is to add the attribute **ow-lazyload-src** to the desired DOM elements, with the path to the content you want to lazyload. You can lazyload images, background images, iframes, audio and videos.

#### With Images
```html
<img src="loading.gif" ow-lazyload-src="imgs/your-image.jpg" alt="Your Image" height="320" />
```
#### With Background Images
```html
<div ow-lazyload-src="imgs/your-image.jpg" style="width:100%;height:400px;background-size:cover;background-repeat:no-repeat;"></div>
```
#### With Audio/Iframes/Video
```html
<video controls ow-lazyload-src="https://www.w3schools.com/html/mov_bbb.mp4" width="100%"></video>
<iframe ow-lazyload-src="https://www.olabaworks.com" width="100%" height="400"></iframe>
```
## Demo
Try a working demo [here](https://www.olabaworks.com/dev/owLazyLoad)
