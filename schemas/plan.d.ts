interface Plan extends FirebaseDocumentObject {
  uid: string;
  title: string;
  createTime: FirebaseFirestore.Timestamp;
  planItems: firebase.firestore.DocumentReference[];
  // old
  // places => items 20200924
  places?: string[];
}

interface CreatePlanRequest {
  uid: string;
  title: string;
}
