import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

export default function NextAuctionDetails() {
    return (
        <View style={{ padding: 20 }}>
            <ScrollView style={{ height: 670 }}>
                <Text style={styles.h1}>Terms and Conditions for Auction</Text>
                <Text style={styles.h2}>These Terms and Conditions (the "Agreement") govern your participation in the auction organized by [CarServe] . By participating in the auction, you agree to be bound by these terms and conditions in their entirety. Please read this Agreement carefully before participating in the auction. If you do not agree with any part of these terms and conditions, you should not participate in the auction.</Text>

                <Text style={styles.h3}>1. Auction Process:</Text>
                <Text>
                    1.1 Auction will be conducted through the CarServ App, as specified by the Auctioneer.
                    1.2. The Auctioneer reserves the right to modify or cancel the auction at any time, at its sole discretion, without prior notice.
                    1.3. The highest bid accepted by the Auctioneer at the close of the auction shall be the winning bid, subject to the Auctioneer's confirmation.
                </Text>

                <Text style={styles.h3}>2. Eligibility:</Text>
                <Text>
                    2.1. Participation in the auction is open to individuals who are at least 18 years old or of legal age in their jurisdiction. Proof of age and identity may be required.
                    2.2. Employees, agents, and affiliates of the Auctioneer, as well as their immediate family members, are not eligible to participate in the auction.
                </Text>

                <Text style={styles.h3}>3. Registration:</Text>
                <Text>
                    3.1. Participants may be required to register with the Auctioneer before being allowed to place bids.
                    3.2. Registration information provided must be accurate, complete, and up-to-date.
                    3.3. The Auctioneer reserves the right to refuse or suspend registration at its sole discretion.
                </Text>

                <Text style={styles.h3}>4. Bidding:</Text>
                <Text>
                    4.1. Bids must be submitted in the format and within the timeframes specified by the Auctioneer.
                    4.2. By placing a bid, participants agree to pay the full amount of the bid if it becomes the winning bid.
                    4.3. Bids are binding and cannot be retracted or modified once submitted.
                    4.4. The Auctioneer may establish bidding increments, and bids must meet or exceed these increments.
                    4.5. The Auctioneer may impose a reserve price or minimum bid on certain items, and such items will not be sold unless the reserve price is met.
                    4.6. The Auctioneer reserves the right to reject or disqualify any bids that it deems inappropriate, invalid, or in violation of these terms and conditions.
                </Text>

                <Text style={styles.h3}>5. Winning Bid and Payment:</Text>
                <Text>
                    5.1. The winning bidder will be notified by the Auctioneer and must complete the payment within the timeframe specified by the Auctioneer.
                    5.2. All bids are subject to additional fees, including buyer's premium, taxes, and any other applicable charges, as determined by the Auctioneer.
                    5.3. Payment must be made in the currency specified by the Auctioneer and in the manner prescribed by the Auctioneer.
                    5.4. Failure to make timely payment may result in disqualification, cancellation of the bid, and/or legal action.
                </Text>

                <Text style={styles.h3}>6. Item Descriptions and Disputes:</Text>
                <Text>
                    6.1. Items put up for auction may be accompanied by descriptions, photographs, or other relevant information. However, the Auctioneer does not guarantee the accuracy or completeness of such descriptions.
                    6.2. Participants are encouraged to inspect the items or seek independent expert advice before placing bids.
                    6.3. All items are sold "as is," and the Auctioneer does not provide any warranties or guarantees regarding the quality, condition, or authenticity of the items.
                    6.4. Any disputes regarding an item must be raised with the Auctioneer within a reasonable timeframe from the close of the auction. The Auctioneer's decision on such disputes shall be final and binding.
                </Text>

                <Text style={styles.h3}>7. Liability:</Text>
                <Text>
                    7.1. Participants acknowledge that they participate in the auction at their own risk.
                    7.2. The Auctioneer, its employees, agents, or affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the auction, including but not limited to bidding errors, technical failures, or loss of data.
                    7.3. Participants agree to indemnify and hold the Auctioneer harmless from any claims, liabilities, damages, or expenses arising out of or in connection with their participation in the auction.
                </Text>

                <Text style={styles.h3}>8. Governing Law and Jurisdiction:</Text>
                <Text>
                    8.1. This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].
                </Text>

                <Text style={styles.h3}>9. Severability:</Text>
                <Text>
                    9.1. If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect.
                </Text>

                <Text style={styles.h3}>10. Entire Agreement:</Text>
                <Text>
                    10.1. This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements, understandings, or representations, whether oral or written, with respect to the auction.
                </Text>

                <Text>By participating in the auction, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.</Text>

                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Text style={styles.btn}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = {
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    h2: {
        fontSize: 18,
        marginBottom: 10,
    },
    h3: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    btn: {
        width: '70%',
        padding: 10,
        backgroundColor: '#3B5998',
        color: 'white',
        fontWeight: '700',
        borderRadius: 32,
        textAlign: 'center',
        fontSize: 20,
    }
};

