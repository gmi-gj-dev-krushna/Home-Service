"use client";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect, useState } from "react";

function BusinessByCategory({ params }) {
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.category) {
      getBusinessList();
    } else {
      setLoading(false);
    }
  }, [params]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(params.category)
      .then((resp) => {
        setBusinessList(resp?.businessLists || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching business list:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!params?.category) {
    return <div>No category selected</div>;
  }

  if (businessList.length === 0) {
    return <div>Currently there are no services in this category</div>;
  }

  return (
    <div>
      <BusinessList title={params.category} businessList={businessList} />
    </div>
  );
}

export default BusinessByCategory;
