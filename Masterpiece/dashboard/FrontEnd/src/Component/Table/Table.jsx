import { useState } from 'react';
import { createStyles, Table, ScrollArea, UnstyledButton, Group, Text, Center, TextInput, rem, Container } from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    th: {
        padding: '0 !important',
    },

    control: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    icon: {
        width: rem(21),
        height: rem(21),
        borderRadius: rem(21),
    },
}));

function Th({ children, reversed, sorted, onSort }) {
    const { classes } = useStyles();
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size="0.9rem" stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
}


function filterData(data, search) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(item).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(data, payload) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}




const sampleData = [
    { name: 'John Doe', email: 'john@example.com', company: 'ABC Corp' },
    { name: 'Jane Smith', email: 'jane@example.com', company: 'XYZ Corp' },
    { name: 'Bob Johnson', email: 'bob@example.com', company: '123 Inc' },
];


export default function TableSort() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(sampleData);
    const [sortBy, setSortBy] = useState(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(sampleData, { sortBy: field, reversed, search }));
    };


    const handleSearchChange = (event) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(sampleData, { sortBy, reversed: reverseSortDirection, search: value }));
    };


    const rows = sortedData.map((row) => (
        <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.company}</td>
        </tr>
    ));

    return (
        <Container size="xl" style={{ paddingTop: '20px' }}>
            <ScrollArea>
                <TextInput
                    placeholder="Search by any field"
                    mb="md"
                    icon={<IconSearch size="0.9rem" stroke={1.5} />}
                    value={search}
                    onChange={handleSearchChange}
                />
                <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} sx={{ tableLayout: 'fixed' }}>
                    <thead>
                        <tr>
                            <Th
                                sorted={sortBy === 'name'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('name')}
                            >
                                Name
                            </Th>
                            <Th
                                sorted={sortBy === 'email'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('email')}
                            >
                                Email
                            </Th>
                            <Th
                                sorted={sortBy === 'company'}
                                reversed={reverseSortDirection}
                                onSort={() => setSorting('company')}
                            >
                                Company
                            </Th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.length > 0 ? (
                            rows
                        ) : (
                            <tr>
                                <td colSpan={Object.keys(sampleData[0]).length}>
                                    <Text weight={500} align="center">
                                        Nothing found
                                    </Text>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </ScrollArea>
        </Container>
    );
}
