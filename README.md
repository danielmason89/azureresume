# Azure Resume

An Azure resume built while going through the Cloud Guru Azure Resume Challenge

This repository contains code for deploying a cloud-based CV website on **Azure**, complete with a **visitor counter** implemented using **Azure Functions** and **Cosmos DB** to track visits in real-time. This README provides setup steps, prerequisites, and an overview of the architecture.

📺 [ACG Projects: Build Your Resume on Azure with Blob Storage, Functions, CosmosDB, and GitHub Actions](https://www.youtube.com/watch?v=ieYrBWmkfno&t=0s) 📺

## Overview

This project demonstrates how to host a personal CV site with **real-time visitor tracking** using cloud services. It leverages **Azure Static Web Apps** for hosting, **Azure Functions** for serverless computing, and **Cosmos DB** for scalable data storage.

---

## Architecture

The project uses the following Azure components:

1. **Azure Static Web Apps** - Hosts the static website and deploys via GitHub Actions.
2. **Azure Functions** - Manages serverless functions for tracking visitor counts.
3. **Cosmos DB** - Stores and retrieves visitor count data.

---

## Features

- **Static CV Hosting**: Hosted on Azure Static Web Apps for fast, reliable delivery.
- **Visitor Counter**: Tracks and displays real-time visitor count.
- **Automatic Deployments**: GitHub Actions handles CI/CD for seamless updates.

---

## Improvements

- **Security**: Add authentication for restricted visitor tracking.
- **Analytics**: Integrate data visualization for detailed visitor insights.
- **Optimizations**: Explore caching mechanisms to improve performance.
