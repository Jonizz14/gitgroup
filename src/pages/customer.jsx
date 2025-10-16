import React, { useState } from "react";
import "./customer.css";

function Customers() {

  const customersData = [
    { customer_name: "Jane Cooper", Company: "Microsoft", phoneNumber: "(225) 555-0118", Email: "jane@microsoft.com", Country: "United States", Status: "Active" },
    { customer_name: "Floyd Miles", Company: "Yahoo", phoneNumber: "(205) 555-0100", Email: "floyd@yahoo.com", Country: "Kiribati", Status: "Inactive" },
    { customer_name: "Ronald Richards", Company: "Adobe", phoneNumber: "(302) 555-0107", Email: "ronald@adobe.com", Country: "Israel", Status: "Inactive" },
    { customer_name: "Marvin McKinney", Company: "Tesla", phoneNumber: "(252) 555-0126", Email: "marvin@tesla.com", Country: "Iran", Status: "Active" },
    { customer_name: "Jerome Bell", Company: "Google", phoneNumber: "(629) 555-0129", Email: "jerome@google.com", Country: "Réunion", Status: "Active" },
    { customer_name: "Kathryn Murphy", Company: "Microsoft", phoneNumber: "(406) 555-0120", Email: "kathryn@microsoft.com", Country: "Curaçao", Status: "Active" },
    { customer_name: "Jacob Jones", Company: "Yahoo", phoneNumber: "(208) 555-0112", Email: "jacob@yahoo.com", Country: "Brazil", Status: "Active" },
    { customer_name: "Kristin Watson", Company: "Facebook", phoneNumber: "(704) 555-0127", Email: "kristin@facebook.com", Country: "Åland Islands", Status: "Inactive" },
    { customer_name: "Jane Cooper", Company: "Microsoft", phoneNumber: "(225) 555-0118", Email: "jane@microsoft.com", Country: "United States", Status: "Active" },
    { customer_name: "Floyd Miles", Company: "Yahoo", phoneNumber: "(205) 555-0100", Email: "floyd@yahoo.com", Country: "Kiribati", Status: "Inactive" },
    { customer_name: "Ronald Richards", Company: "Adobe", phoneNumber: "(302) 555-0107", Email: "ronald@adobe.com", Country: "Israel", Status: "Inactive" },
    { customer_name: "Marvin McKinney", Company: "Tesla", phoneNumber: "(252) 555-0126", Email: "marvin@tesla.com", Country: "Iran", Status: "Active" },
    { customer_name: "Jerome Bell", Company: "Google", phoneNumber: "(629) 555-0129", Email: "jerome@google.com", Country: "Réunion", Status: "Active" },
    { customer_name: "Kathryn Murphy", Company: "Microsoft", phoneNumber: "(406) 555-0120", Email: "kathryn@microsoft.com", Country: "Curaçao", Status: "Active" },
    { customer_name: "Jacob Jones", Company: "Yahoo", phoneNumber: "(208) 555-0112", Email: "jacob@yahoo.com", Country: "Brazil", Status: "Active" },
    { customer_name: "Kristin Watson", Company: "Facebook", phoneNumber: "(704) 555-0127", Email: "kristin@facebook.com", Country: "Åland Islands", Status: "Inactive" },
    { customer_name: "Jacob Jones", Company: "Yahoo", phoneNumber: "(208) 555-0112", Email: "jacob@yahoo.com", Country: "Brazil", Status: "Active" },
    { customer_name: "Kristin Watson", Company: "Facebook", phoneNumber: "(704) 555-0127", Email: "kristin@facebook.com", Country: "Åland Islands", Status: "Inactive" }
  ];

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filteredData = customersData
    .filter(user =>
      user.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      user.Company.toLowerCase().includes(search.toLowerCase()) ||
      user.Email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "az") return a.customer_name.localeCompare(b.customer_name);
      if (sort === "za") return b.customer_name.localeCompare(a.customer_name);
      return 0;
    });

  return (
    <div className='customer_page_container'>
      <div className='customer_page_content_div'>
        <div className='customer_page_content_text'>
          <p className='customer_page_content_p1'>All Customers</p>
          <p className='customer_page_content_p2'>Active Members</p>
        </div>
        <div className='customer_page_content_searchbar'>
          <input
            type="text"
            placeholder='Search'
            className='customer_page_content_searchbar_input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="az">Name A-Z</option>
            <option value="za">Name Z-A</option>
          </select>
        </div>
      </div>

      <div className='customer_page_table_div'>
        <div className='customer_page_table_div_flex'>
          <p>Customer Name</p>
          <p>Company</p>
          <p>Phone Number</p>
          <p>Email</p>
          <p>Country</p>
          <p>Status</p>
        </div>

        {filteredData.length > 0 ? filteredData.map((user, i) => (
          <div className='customer_page_table_div_flex' key={i}>
            <p>{user.customer_name}</p>
            <p>{user.Company}</p>
            <p>{user.phoneNumber}</p>
            <p>{user.Email}</p>
            <p>{user.Country}</p>
            <p>
              <span className={user.Status === "Active" ? "status_active" : "status_inactive"}>
                {user.Status}
              </span>
            </p>
          </div>
        )) : <p style={{ padding: "20px" }}>Not found 😢</p>}
      </div>
    </div>
  );
}

export default Customers;
