# my-own-nebula

My-own-nebula is a project that was originally based on a PyCon 2018 conference and demo given by Emily Xie on making generative art with python. It was first written in python with processing.py and then translated to p5.js to be able to show it in a browser and publish it on the web.

## The idea
Make a generative art picture of a nebula-like digital object but still be able to get creative and generate different patterns. 
## The details
The whole generated picture is an endlessly repeated circle (or sections of). The mouse cursor operates as a center and guide to the automatically generated circle arc, the amplitude slider determines the max deployment angle for the circle arc (min 10 degrees and max 360 for the full circle). Press any key and the output is saved as a tif file. The shape randomness is achieved thanks to the Perlin noise function. At each iteration the drawn arc either diminishes or grows depending whether its radius is a positive or negative value.

## Output examples

![my-own-nebula-1](https://user-images.githubusercontent.com/96912536/161423302-af33c857-4ebe-4d15-bbe4-54f07c50ceb1.png)

![my-own-nebula-pattern](https://user-images.githubusercontent.com/96912536/161423312-d3837966-a195-4012-a640-8a2d7958225b.png)


## Live version
https://jelenaristic.info/my-own-nebula/


## Reference

https://processing.org/

https://py.processing.org/

https://p5js.org/



### Thank you and have fun!

### Jelena
