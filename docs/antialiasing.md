# Anti-Aliasing

- Anti-Aliasing in COD:MWR does not seem to work on all objects in the scene (namely, it does not seem to work well on your viewmodel (hands, gun)). To bypass this issue, there are multiple solutions you could use.

- The best low-end solution is to try and use FXAA in-game. This is a post-process anti-aliasing method which smears the entire image, making it look smoother. Good for lower-end PCs which do not have spare performance to use for the next few methods.

# DLDSR
- DLDSR (RTX ONLY). This is the best way to eliminate jagged edges in COD:MWR, and by extension, H1-Mod. DLDSR is a super-sampling anti-aliasing method that renders the image at a high resolution, then fits it on a smaller display. This makes the entire game look a lot sharper, and removes jagged edges. DLDSR at 1.25x has no performance cost.

## How to use DLDSR

1. Go to Nvidia Control Panel, and then "Manage 3D Settings"
2. In the "Global" tab, search for "DSR - Factors"
3. Then, you should see the DL (Deep Learning) part, with some factors (usually 1440p and 1620p)
4. Enable your desired DLDSR factors.
5. Then, within Nvidia Control Panel, go to the "Change Resolution" tab.
6. Change your resolution to one of the DLDSR ones. Make sure your refresh rate is also what you desire.
7. Run H1-Mod, and make sure that it runs in Borderless mode. Exclusive fullscreen does not work for this method.

## But I don't have an RTX card! What can I do?

- You may use the standard DSR factors, if you are not running a laptop (usually known as "Optimus") Nvidia or AMD GPU. Both Nvidia and AMD have their respective DSR systems, but they are very expensive when it comes to performance. Usage is recommended only on very powerful GPUs.

- The normal DSR factors will be the same tab as the DLDSR factors. Please follow the above DLDSR tutorial on how to enable other factors.

## Additional Note!

- Your desktop will look blurry in DSR / DLDSR mode. Make sure to bear that in mind, and revert back to normal resolution once you are done with your gaming session.

