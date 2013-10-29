# TODO

## JavaScript

- Slow JavaScript on Google Chrome (timeline, profiler, flamecharts).
- Investigation on Firefox also (profiler).
- Debugging performance with Windows Performance Toolkit on Win 8.1.
  - Modify my demo with HTML 5 slot machine.

## Memory

- Timeline and reference counts.
- Tracking memory leaks with memory snapshots.
  - Small sample with leaking DOM and JS objects.

## DOM

- Layout trashing.
- Identifying scrolling bottleneck (Continuous Repaint Mode, FPS).
- Debugging issues related with layers.
  - Three samples:
    - One with layout trashing.
    - Second with heavy operation on scroll (not JS one, drawing one).
    - Third with several layers and showing how to enforce GPU acceleration for certain layer.

## Network

- Presentation of network and audits tabs and also PageSpeed extension.
  - Node.js application with slow GET and POST.
  - Serving 100 images and displaying them all at once.