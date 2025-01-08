#!/bin/bash

source ./keycloak-config.sh

IMPORT_PATH="/opt/keycloak/data/import"

docker cp $KEYCLOAK_IMPORTS_FOLDER/. $CONTAINER_NAME:$IMPORT_PATH
docker exec -it $CONTAINER_NAME /opt/keycloak/bin/kc.sh import --dir $IMPORT_PATH

if [ $? -eq 0 ]; then
  echo "Realm exported to $KEYCLOAK_IMPORTS_FOLDER."
else
  echo "Failed to export realm to $KEYCLOAK_IMPORTS_FOLDER."
fi
