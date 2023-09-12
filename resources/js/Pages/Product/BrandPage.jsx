import TextInput from "@/Components/TextInput";
import BasicSection from "@/Components/sections/BasicSection";
import {
    AspectRatio,
    Tabs,
    Card,
    Text,
    SimpleGrid,
    Group,
    Image,
    Box,
    Button,
    Textarea,
    Stack,
    FileInput,
    Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { useQuery } from "@tanstack/react-query";
const BrandPage = () => {
    return (
        <div>
            <Tabs defaultValue="view">
                <Stack>
                    <Tabs.List>
                        <Tabs.Tab value="view">View Brands</Tabs.Tab>
                        <Tabs.Tab value="create">Create Brand</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="view">
                        <Box maw={1100} mx="auto">
                            <ViewBrands />
                        </Box>
                    </Tabs.Panel>
                    <Tabs.Panel value="create">
                        <Box maw={600} mx="auto">
                            <BasicSection>
                                <BrandForm submitUrl="/v1/add-brand/" />
                            </BasicSection>
                        </Box>
                    </Tabs.Panel>
                </Stack>
            </Tabs>
        </div>
    );
};

const useBrandsQuery = () => {
    const url = "/v1/brands";
    const { data: brands } = useQuery({
        queryKey: ["get/brands"],
        queryFn: () => {
            return axios.get(url).then((res) => res.data.data.brands);
        },
    });
    return {
        brands,
    };
};

const BrandForm = ({
    brand,
    onSuccess = () => {},
    onCancel = () => {},
    submitUrl = "",
}) => {
    const brandName = brand?.brandName ? brand?.brandName : "My Cool Brand";
    const description = brand?.description
        ? brand?.description
        : "My Brand is very cool";
    const img = null;
    const form = useForm({
        initialValues: {
            brandName,
            description,
            img,
        },
        validate: () => {
            return null;
        },
    });
    const submitForm = (values) => {
        axios
            .post(submitUrl)
            .then((res) => {
                const data = res.data;
                console.log({ data });
                form.reset();
                onSuccess();
            })
            .catch((error) => {
                throw error;
            });
    };
    return (
        <form onSubmit={form.onSubmit(submitForm)}>
            <Stack>
                <TextInput
                    {...form.getInputProps("brandName")}
                    label="Brand Name"
                />
                <Textarea
                    {...form.getInputProps("description")}
                    label="Brand Description"
                />
                <FileInput
                    {...form.getInputProps("img")}
                    label="Upload files"
                    placeholder="Upload files"
                    accept="image/png,image/jpeg"
                />

                <SimpleGrid cols={2}>
                    <Button type="submit">Confirm</Button>
                    <Button
                        sx={(t) => ({
                            backgroundColor: t.colors.red[8],
                            "&:hover": {
                                backgroundColor: t.colors.red[7],
                            },
                        })}
                        type="button"
                        onClick={() => {
                            onCancel();
                        }}
                    >
                        Cancel
                    </Button>
                </SimpleGrid>
            </Stack>
        </form>
    );
};

const ViewBrands = () => {
    const { brands } = useBrandsQuery();
    console.log({ brands });
    const hasData = Array.isArray(brands);

    const editBrand = (brand) => {
        const { brandName, id } = brand;
        modals.open({
            title: `Edit brand ${brandName}`,
            centered: true,
            children: (
                <BrandForm
                    submitUrl={`/v1/edit-brand/${id}`}
                    brand={brand}
                    onCancel={() => {
                        modals.closeAll();
                    }}
                    onSuccess={() => {
                        modals.closeAll();
                    }}
                />
            ),
        });
    };
    const deleteBrand = (id) => {
        const confirm = window.confirm(
            "Are you sure you want to delete this ?"
        );
        if (confirm) {
            //do something
        }
    };

    return (
        <div>
            <Group position="center" align="normal">
                {hasData
                    ? brands.map((brand) => {
                          const id = brand.id;
                          return (
                              <Card
                                  sx={{
                                      flex: 1,
                                      display: "flex",
                                      flexDirection: "column",
                                  }}
                                  key={id}
                                  miw={150}
                                  maw={200}
                              >
                                  <AspectRatio ratio={16 / 11}>
                                      <Image src={brand.img}></Image>
                                  </AspectRatio>
                                  <Text size="sm" weight={"bold"} mt={"auto"}>
                                      {brand.brandName}
                                  </Text>
                                  <Box
                                      sx={{
                                          display: "flex",
                                          gap: "5px",
                                          alignItems: "center",
                                          justifyContent: "center",
                                      }}
                                  >
                                      <Button
                                          size="xs"
                                          compact
                                          onClick={() => editBrand(brand)}
                                      >
                                          Edit
                                      </Button>
                                      <Button
                                          sx={(t) => ({
                                              backgroundColor: t.colors.red[8],
                                              "&:hover": {
                                                  backgroundColor:
                                                      t.colors.red[7],
                                              },
                                          })}
                                          size="xs"
                                          compact
                                          onClick={() => deleteBrand(id)}
                                      >
                                          Delete
                                      </Button>
                                  </Box>
                              </Card>
                          );
                      })
                    : "no brands to show, create one please"}
            </Group>
        </div>
    );
};

export default BrandPage;
