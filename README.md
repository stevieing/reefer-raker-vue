![reefer-raker](https://user-images.githubusercontent.com/519327/109385373-39f5f480-78eb-11eb-9bb6-022c62e01fac.png)
# Reefer Raker

An application to track moving boxes into the reefers

During the pandemic the campus has had to deal with more samples than ever before. We are now processing 20000 samples a week.

The problem is where to store them and how to keep track of them? We don’t have enough freezer space in our buildings so we now have 5 large -20C refrigerated units called reefers which are in the campus car park. Once the samples have been sequenced they need to be moved but we also need to make sure we can find out where they are.

Currently this is done with existing software, spreadsheets and manual checking. It is time consuming and easy to make mistakes especially when our staff are working in cold conditions.

All of the samples are stored in plates with a unique barcode. We need to build them an application that allows them to scan those barcodes and store the location. They also need to be able to double check that they are putting them in the right place. 

This would make the jobs of the reefer teams much easier as well as allowing us to find out where they are. Imagine trying to find a sample amongst thousands of other samples by hand. It would be like trying to find a needle in a haystack!

# Building and running Reefer Raker locally

Building and running Reefer Raker in your local dev environment is very easy. Be sure you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/), then follow the directions below:

1. Clone the source code

git clone https://github.com/wgc-hackathon/reefer-raker-vue.git

2. Install development dependencies

`npm install`

3. Run a local development server

`npm run dev`

Reefer Raker is now running, and can be accessed by pointing a web browser at http://localhost:3000/

This application is built using [Vite](https://github.com/vitejs/vite) so you can also start it locally using the `npx vite` command.
