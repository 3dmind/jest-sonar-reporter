#!/usr/bin/env bash

echo "Update Sonar project version..."
sed -e 's/sonar.projectVersion=[^ ]*/sonar.projectVersion='$1'/g' -i '' sonar-project.properties
