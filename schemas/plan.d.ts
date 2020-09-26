interface Plan extends FirebaseDocumentObject, TimeBased {
  uid: string;
  title: string;
  createTime: FirebaseFirestore.Timestamp;

  planItemIds: string[];
  // migration 20200925 : documentRef to string(id)
  planItems?: FirebaseFirestore.DocumentReference[];
  // migration 20200924 places => items(refs)
  places?: string[];
}

interface PlanItem extends FirebaseDocumentObject, TimeBased {
  uid: string;
  placeId: string;
  title: string;
  planDocId: string;
}
