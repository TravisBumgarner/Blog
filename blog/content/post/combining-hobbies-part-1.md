{
    "title": "Combining Hobbies: Programming, Electronics & Photography Part I",
    "date": "2019-01-01T09:00:00-00:00",
    "draft": true,
    "tools": ["Arduino", "C++"],
    "topics": [
        "Electronics",
        "Photography"
    ],
    "project": "combining-hobbies"
}

*Note*: This article was originally published to my Photography Portfolio Blog on March 3rd, 2016. 

At some point several weeks ago I set about brainstorming what new project I wanted to work on. I scribbled out subjects I had experience with or wanted to learn about and I ended up drawing circles around programming, electronics, and photography as a good combination. I knew nothing of programming, just a little bit about electronics, and probably an unhealthy amount about photography.

<!--more-->

{{< highlight cpp >}}
while True {
    turnOn(LED)
    wait(1)
    turnOff(LED)
    wait(1)
}
{{< /highlight >}}

I like to use the [Arduino](http://arduino.cc) for electronics because it's really easy to use. The computer code to make a LED blink is as simple as the code to the left.

{{< figure src="/image/combining-hobbies-part-1/arducam.jpg" caption="Arducam" >}}

I then set about trying to find a camera that would plug into the Arduino and found the [Arducam](http://arducam.com]). A $30, 2 megapixel camera that, along with an SD card reader, could offer the basic features of a camera, shoot and save, along with some settings adjustments such as image size and white balance.

So now that I had a camera to play with, what to do with it? With some more brainstorming I decided I'd create time lapse images of single scenes. Not a video, but a single image to demonstrate the passing of time. The left side of the image represents the start of the photo capturing period and the right side the end.

This would be achieved with the camera set in a location and set to run for a given period of time. The images would then be taken off the SD card and loaded into a Python programming script. To easily demonstrate this I'll explain by stitching three images. A cut of the left third of the first image, a cut from the middle third of the second image, and a cut from the right third of the last image, are then stitched together into a final image. I've written a script, which can be viewed on [Github](https://github.com/TravisBumgarner/PhotoStitch), that can take any number of images and stitch them together. Below is a test with fake input images of solid colors representing a sunrise over time, the script running, and the output.

{{< figure src="/image/combining-hobbies-part-1/example.png" caption="Example Output" >}}

Next time, I'll share more about the electronics, Arduino programming, test results, and quality improvements.