docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probnyjj-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probnyjj-java/app ../../..
