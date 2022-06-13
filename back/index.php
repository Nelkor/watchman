<?php

if ($_SERVER['REQUEST_URI'] === '/whoami') {
  echo json_encode([
    'userId' => +getallheaders()['X-Auth-User']
  ]);

  exit;
}

echo 'unknown path';
