// plan -> planitem -> eventitem
interface Plan extends FirebaseDocumentObject, TimeBased, UserBased {
  title: string;
  planItemIds: string[];
  // migration 20200925 : documentRef to string(id)
  planItems?: FirebaseFirestore.DocumentReference[];
  // migration 20200924 places => items(refs)
  places?: string[];
}

interface PlanItem
  extends FirebaseDocumentObject,
    TimeBased,
    PlaceBased,
    UserBased {
  // parent
  planDocId: string;
  title: string;
  // 20201005 updated
  eventItemIds: string[];
}

interface EventItem extends FirebaseDocumentObject, TimeBased, UserBased {
  // parent
  planItemDocId: string;
  title: string;
}
