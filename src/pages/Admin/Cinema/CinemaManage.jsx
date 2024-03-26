import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, Typography, Button } from "@material-tailwind/react";
import { Select, Table, Input } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const { Search } = Input;
import qs from "qs";
import { useEffect, useState } from "react";
import CinemaAddNew from "./CinemaAddNew";

const columns = [
  {
    title: "ID",
    dataIndex: "cinemaId",
    width: 100,
    fixed: "left",
  },
  {
    title: "Tên rạp",
    dataIndex: "cinemaName",
    width: 300,
    fixed: "left",
    sorter: (a, b) => a.cinemaName - b.cinemaName,
  },
  {
    title: "Địa chỉ",
    dataIndex: "cinemaAddress",
    width: 500,
  },
  {
    title: "Tỉnh/Thành phố",
    dataIndex: "cinemaCity",
    width: 300,
    sorter: (a, b) => a.cinemaCity - b.cinemaCity,
  },
  {
    title: "Action",
    dataIndex: "action",
    width: 150,
    render: (text, record) => {
      return (
        <div>
          <EditIcon
            style={{ marginRight: "10px" }}
            onClick={() => {
              onEdit(record);
            }}
          ></EditIcon>
          <DeleteIcon
            onClick={() => {
              onDeleteMovie(record);
            }}
          ></DeleteIcon>
        </div>
      );
    },
  },
];
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const CinemaManage = () => {
  const [isAddNewModalOpen, setAddNewModalOpen] = useState(false);
  const handleNewCinema = () => {
    setAddNewModalOpen(true);
  };
  const handleCloseModal = () => {
    setAddNewModalOpen(false);
  };
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    filter: "",
  });
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <>
      <Card className="h-full w-full !rounded-none !overflow-visible">
        <CardHeader floated={false} shadow={false} className="rounded-none p-3">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Danh sách rạp chiếu
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Xem thông tin của các rạp chiếu
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                Xem tất cả
              </Button>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleNewCinema}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Thêm rạp
                chiếu mới
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Select
              defaultValue="HaNoi"
              style={{
                width: 288,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "HaNoi",
                  label: "Hà Nội",
                },
                {
                  value: "TpHcm",
                  label: "TP Hồ Chí Minh",
                },
                {
                  value: "DaNang",
                  label: "Đà Nẵng",
                },
                {
                  value: "ThanhHoa",
                  label: "Thanh Hoá",
                },
                {
                  value: "HaiPhong",
                  label: "Hải Phòng",
                },
                {
                  value: "QuangNinh",
                  label: "Quảng Ninh",
                },
              ]}
            />
            <div className="w-full md:w-72">
              <Search
                placeholder="Tìm kiếm"
                onSearch={onSearch}
                style={{
                  width: 288,
                }}
              />
            </div>
          </div>
        </CardHeader>
        <Table
          columns={columns}
          rowKey={(record) => record.login.uuid}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
          style={{ padding: 24 }}
        />
      </Card>
      {isAddNewModalOpen && (
        <CinemaAddNew
          isOpen={isAddNewModalOpen}
          onClose={handleCloseModal}
        ></CinemaAddNew>
      )}
    </>
  );
};
export default CinemaManage;
