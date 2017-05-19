# USAGE
# python realtime_stitching.py

# import the necessary packages
from __future__ import print_function
from pyimagesearch.basicmotiondetector import BasicMotionDetector
from pyimagesearch.panorama import Stitcher
from imutils.video import VideoStream
import numpy as np
import thread
import socket
import datetime
import imutils
import time
import os
import cv2

left = cv2.imread('reset.jpg')
right = cv2.imread('reset.jpg')

cap1 = cv2.VideoCapture(0)
cap2 = cv2.VideoCapture(1)

"""cap1.set(3,1080)
cap1.set(4,840)

cap2.set(3,1080)
cap2.set(4,840)"""

black_img = np.zeros((480, 350, 3), np.uint8)

print(cv2.__version__)
time.sleep(2.0)

# initialize the image stitcher, motion detector, and total
# number of frames read
stitcher = Stitcher()
motion = BasicMotionDetector(minArea=2000)
total = 0
count = 1

while True:
    ret, Left = cap1.read()
    ret, Right = cap2.read()

    if Left is None or Right is None:
        continue

    result = stitcher.stitch([Left, Right])

    if result is None:
        print("[INFO] homography could not be computed")
        continue

    # convert the panorama to grayscale, blur it slightly, update
    # the motion detector
    result_temp = result.copy()
    result_temp[0:480, 0:350] = black_img
    result_temp[0:480, 930:1280] = black_img
    gray = cv2.cvtColor(result_temp, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (21, 21), 0)
    locs = motion.update(gray)

    # only process the panorama for motion if a nice average has
    # been built up
    if total > 32 and len(locs) > 0:
        # initialize the minimum and maximum (x, y)-coordinates,
        # respectively
        (minX, minY) = (np.inf, np.inf)
        (maxX, maxY) = (-np.inf, -np.inf)

        # loop over the locations of motion and accumulate the
        # minimum and maximum locations of the bounding boxes
        for l in locs:
            (x, y, w, h) = cv2.boundingRect(l)
            (minX, maxX) = (min(minX, x), max(maxX, x + w))
            (minY, maxY) = (min(minY, y), max(maxY, y + h))

        # draw the bounding box
        cv2.rectangle(result, (minX, minY), (maxX, maxY), (0, 0, 255), 3)

    # increment the total number of frames read and draw the
    # timestamp on the imageS
    total += 1
    timestamp = datetime.datetime.now()
    ts = timestamp.strftime("%A %d %B %Y %I:%M:%S%p")
    cv2.putText(result, ts, (10, result.shape[0] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0, 0, 255), 1)


    cv2.imshow("Result", result)
    cv2.imshow("Left Frame", Left)
    cv2.imshow("Right Frame", Right)

    key = cv2.waitKey(1)

    if key == 115:

        if count < 10:
            cv2.imwrite("Result0" + str(count) + ".jpg", result)
        else:
            cv2.imwrite("Result" + str(count) + ".jpg", result)

        print(count)
        count += 1

cap1.release()
cap2.release()