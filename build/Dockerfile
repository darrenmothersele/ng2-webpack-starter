FROM php:7.0-apache
RUN a2enmod rewrite
COPY dist/ /var/www/html/
COPY .htaccess /var/www/html/.htaccess
