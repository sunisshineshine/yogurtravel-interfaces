interface ActionResult {
  ok: boolean;
  error_message?: string;
}

interface DatabaseActionResult extends ActionResult {
  docId: string;
}

interface PlaceDetailResponse {
  status: google.maps.places.PlacesServiceStatus;
  result: google.maps.places.PlaceResult;
  html_attributions: any;
}

interface AutocompleteResult {
  status: google.maps.places.PlacesServiceStatus;
  error_message?: string;
  predictions: google.maps.places.AutocompletePrediction[];
}
