{
    "title": "Combining Hobbies: Programming, Electronics & Photography Part II",
    "date": "2019-01-08T09:00:00-00:00",
    "draft": true,
    "tools": ["Arduino", "C++"],
    "topics": [
        "Electronics",
        "Photography"
    ],
    "project": "combining-hobbies"  
}

*Note*: This article was originally published to my Photography Portfolio Blog on March 15rd, 2016. 

While I waited for the Arducam camera to arrive I set about designing the user display/inputs. After a bunch of sketching, I narrowed my setup to include an 16x2 LCD screen and 4 input buttons. I also brainstormed the settings I wanted to control. You can see the setup in action below.

<!--more-->

I ran into a flash memory issue where I ran out of space on the Arduino chip. I have two implementations of this project, one to control the little Arducam camera, and another to control a DSLR. Once I create the design for the DSLR, I can remove the SD card reader and Arducam which will free up a bunch of flash memory which will allow me to add more custom settings. Until then, I've had to keep it simple.

{{< youtube TFMe69kptv0 >}}

Once the camera arrived, I rewrote the code to include the ArduCam library. This is about the point where I began to lose my mind a bit. I pushed the flash memory to its limit with libraries for an LCD screen, SD Card reader, and Arducam.  This started to cause some errors I couldn't quite figure out. In the end, I had to take a break to figure out how to clean up my code and reduce its size. When you're working with an Arduino, you only have 16KB which runs out quite quickly. After several hours of coding issues as well as some physical wiring issues, I had a working camera!

{{< youtube xecbKr4nb_E >}}

With a working camera, it was time for tests. I kept having partial successes leaving my camera running and taking pictures. However, 1 in every 15 or so images wouldn't save properly and the camera wouldn't always continually run. After several hours of troubleshooting issues, I realized that the SD card had reached its end and since I only had one, I've had to take a break while I wait for a new card. I was able to run a successful test of taking pictures with the camera, exporting them to the computer, and modifying them with the Python script I wrote.

{{< figure src="/image/combining-hobbies-part-2/finalImage0-1.png" title="Sample Output" >}}

It's not the most beautiful view but you can see the passage of time in this stitched image. If you look at the wood fence near the car, towards the left side is when the sun wasn't out but as you move towards the right, the fence gets brighter. That's where the sun came out for a few minutes.

There's still work to be done but I've gained a lot of feedback from my tests and now have some new stuff to work on. I'll be back when I have another update. Next time I'll have a bit to say about simplifying/finalizing the circuit, hooking up a DSLR, and more test images.