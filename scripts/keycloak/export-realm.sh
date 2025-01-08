#!/bin/bash

source ./keycloak-config.sh

EXPORT_PATH="/opt/keycloak/data/realm-export"

docker exec -it $CONTAINER_NAME /opt/keycloak/bin/kc.sh export --realm "WebInsights" --dir $EXPORT_PATH
docker cp $CONTAINER_NAME:$EXPORT_PATH/. $KEYCLOAK_IMPORTS_FOLDER

if [ $? -eq 0 ]; then
  echo "Realm exported to $KEYCLOAK_IMPORTS_FOLDER."
else
  echo "Failed to export realm to $KEYCLOAK_IMPORTS_FOLDER."
fi