<?php
require_once 'google-api-php-client-1-master/src/Google/autoload.php';

session_start();

$client = new Google_Client();
$client->setAuthConfigFile('client_secret.json');
$client->addScope(Google_Service_Calendar::CALENDAR_READONLY);

if (isset($_SESSION['access_token']) && $_SESSION['access_token']) {
  $client->setAccessToken($_SESSION['access_token']);
  $service = new Google_Service_Calendar($client);
  $events = $service->events->listEvents('primary');

while(true) {
  foreach ($events->getItems() as $event) {
    echo $event->getSummary();
  }
  $pageToken = $events->getNextPageToken();
  if ($pageToken) {
    $optParams = array('pageToken' => $pageToken);
    $events = $service->events->listEvents('primary', $optParams);
  } else {
    break;
  }
}
  echo json_encode($events);
} else {
  $redirect_uri = 'http://' . $_SERVER['HTTP_HOST'] . '/oauthcallback.php';
  header('Location: ' . filter_var($redirect_uri, FILTER_SANITIZE_URL));

}