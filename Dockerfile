FROM nginx:alpine
LABEL maintainer="NetSphere Engineering"
LABEL description="NetSphere Networking Management static frontend"
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY README.md /usr/share/nginx/html/
RUN echo "ok" > /usr/share/nginx/html/health
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
