FROM nginx:latest
ARG MAINTAINER="zfxmnb <fanx1949@gmail.com>"
LABEL maintainer=${MAINTAINER}
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /var/dycast
ARG PORT=4123
EXPOSE ${PORT}
# entry point
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]